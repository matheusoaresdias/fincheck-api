// Not being used, nestjs now have 'optional' as a boolean that can be used instantiating the class
import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override transform(value: T, metadata: ArgumentMetadata) {
    if (typeof value === 'undefined') {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
