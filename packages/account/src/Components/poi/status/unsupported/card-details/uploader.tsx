import React from 'react';
import classNames from 'classnames';
import { Field, FormikProps, FormikValues } from 'formik';
import { localize } from '@deriv/translations';
import { isMobile, supported_filetypes, max_document_size } from '@deriv/shared';
import { Button, Icon, Text, FileDropzone } from '@deriv/components';
import { ROOT_CLASS } from '../constants';

const DROPZONE_ERRORS = {
    'file-too-large': localize('File size should be 8MB or less'),
    'file-invalid-type': localize('File uploaded is not supported'),
    'too-many-files': localize('Please select one file only'),
    GENERAL: localize('Sorry, an error occured. Please select another file.'),
};
type TDROPZONE_ERRORS = Readonly<{
    'file-too-large': string;
    'file-invalid-type': string;
    'too-many-files': string;
    GENERAL: string;
}>;

type TUploader = {
    data: FormikValues;
    value: FormikValues;
    is_full: boolean;
    has_frame: boolean;
    onChange: (e: unknown) => void;
    setFieldValue: FormikProps<FormikValues>['setFieldValue'];
    handleChange: (file: object | null, setFieldValue?: FormikProps<FormikValues>['setFieldValue']) => void;
};

const Message = ({ data, open }: FormikValues) => (
    <div className={`${ROOT_CLASS}__uploader-details`}>
        <Icon className={`${ROOT_CLASS}__uploader-icon`} icon={data.icon} size={236} />
        <Text as='p' size='xs' color='general' align='center'>
            {data.info}
        </Text>
        <Button
            medium
            secondary
            text={isMobile() ? localize('Tap here to upload') : localize('Drop file or click here to upload')}
            onClick={open}
        />
    </div>
);

const Preview = ({ data, setFieldValue, value, has_frame, handleChange }: Partial<TUploader>) => {
    const [background_url, setBackgroundUrl] = React.useState<string>();

    React.useEffect(() => {
        setBackgroundUrl(value?.file ? URL.createObjectURL(value?.file) : '');
    }, [value]);

    return (
        <div className={`${ROOT_CLASS}__uploader-details ${ROOT_CLASS}__uploader-details--preview`}>
            <div
                className={classNames(`${ROOT_CLASS}__uploader-image`, {
                    [`${ROOT_CLASS}__uploader-image--has-frame`]: has_frame,
                })}
                style={{ backgroundImage: `url(${background_url})` }}
            >
                {has_frame && <Icon icon='IcPoiFrame' className={`${ROOT_CLASS}__uploader-frame`} />}
                {(!background_url || value?.file.type.indexOf('pdf') !== -1) && (
                    <React.Fragment>
                        <Icon icon='IcCloudUpload' size={50} />
                        <Text as='p' size='xs' color='general' align='center'>
                            {value?.file.name}
                        </Text>
                    </React.Fragment>
                )}
                <Icon
                    icon='IcCloseCircle'
                    className={`${ROOT_CLASS}__uploader-remove`}
                    onClick={() => {
                        handleChange?.(null, setFieldValue);
                    }}
                    size={16}
                />
            </div>
            <Text as='p' size='xs' color='general' align='center'>
                {data?.info}
            </Text>
        </div>
    );
};

const Uploader = ({ data, value, is_full, onChange, has_frame }: Partial<TUploader>) => {
    const [image, setImage] = React.useState<{ errors?: [] }>();

    React.useEffect(() => {
        setImage(value);
    }, [value]);

    const handleChange = (file?: object, setFieldValue?: FormikProps<FormikValues>['setFieldValue']) => {
        if (onChange && typeof onChange === 'function') {
            onChange(file);
        }
        setFieldValue?.(data?.name, file);
    };

    const handleAccept = (files: object[], setFieldValue: () => void) => {
        const file = { file: files[0], errors: [], ...data };
        handleChange(file, setFieldValue);
    };

    const handleReject = (files: Array<{ errors?: [] }>, setFieldValue: () => void) => {
        const errors = files[0].errors?.map((error: { code: string }) =>
            DROPZONE_ERRORS[error.code as keyof TDROPZONE_ERRORS]
                ? DROPZONE_ERRORS[error.code as keyof TDROPZONE_ERRORS]
                : DROPZONE_ERRORS.GENERAL
        );
        const file = { ...files[0], errors, ...data };
        handleChange(file, setFieldValue);
    };

    const ValidationErrorMessage = (open: () => void) => (
        <div className={`${ROOT_CLASS}__uploader-details`}>
            {image?.errors?.map((error: string, index: number) => (
                <Text key={index} as='p' size='xs' color='secondary' align='center'>
                    {error}
                </Text>
            ))}
            <Button
                medium
                secondary
                text={isMobile() ? localize('Tap here to upload') : localize('Drop file or click here to upload')}
                onClick={open}
            />
        </div>
    );

    return (
        <Field name={data?.name}>
            {({ form: { setFieldValue } }: FormikValues) => (
                <div
                    className={classNames(`${ROOT_CLASS}__uploader`, {
                        [`${ROOT_CLASS}__uploader--full`]: is_full,
                    })}
                >
                    <FileDropzone
                        accept={supported_filetypes}
                        error_message={localize('Please upload supported file type.')}
                        filename_limit={32}
                        hover_message={localize('Drop files here..')}
                        max_size={max_document_size}
                        message={(open: FormikValues) => <Message open={open} data={data} />}
                        preview_single={
                            image && (
                                <Preview
                                    data={data}
                                    value={image}
                                    has_frame={has_frame}
                                    setFieldValue={setFieldValue}
                                    handleChange={() => handleChange()}
                                />
                            )
                        }
                        multiple={false}
                        onDropAccepted={(files: object[]) => handleAccept(files, setFieldValue)}
                        onDropRejected={(files: Array<object>) => handleReject(files, setFieldValue)}
                        validation_error_message={value?.errors?.length ? ValidationErrorMessage : null}
                        noClick
                        value={image ? [image] : []}
                        className=''
                    />
                </div>
            )}
        </Field>
    );
};

export default Uploader;
