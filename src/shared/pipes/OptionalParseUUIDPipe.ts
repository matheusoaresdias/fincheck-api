// Not being used, nestjs now have 'optional' as a boolean that can be used instantiating the class
import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  override transform(value: string, metadata: ArgumentMetadata) {
    if (typeof value === 'undefined') {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
