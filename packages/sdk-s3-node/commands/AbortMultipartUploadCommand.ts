import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {AbortMultipartUpload} from '../model/AbortMultipartUpload';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AbortMultipartUploadInput} from '../types/AbortMultipartUploadInput';
import {AbortMultipartUploadOutput} from '../types/AbortMultipartUploadOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class AbortMultipartUploadCommand implements __aws_types.Command<
    InputTypesUnion,
    AbortMultipartUploadInput,
    OutputTypesUnion,
    AbortMultipartUploadOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        AbortMultipartUploadInput,
        AbortMultipartUploadOutput,
        _stream.Readable
    >();

    constructor(readonly input: AbortMultipartUploadInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<AbortMultipartUploadInput, AbortMultipartUploadOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AbortMultipartUpload
        };
        stack.add(
            __aws_bucket_endpoint_middleware.bucketEndpointMiddleware({
                forcePathStyle: configuration.forcePathStyle,
                preformedBucketEndpoint: configuration.bucketEndpoint,
                useAccelerateEndpoint: configuration.useAccelerateEndpoint,
                useDualstackEndpoint: configuration.useDualstackEndpoint
            }),
            {
                step: 'build',
                priority: 0
            }
        );
        return stack.resolve(
            handler<AbortMultipartUploadInput, AbortMultipartUploadOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}