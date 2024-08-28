import { Pipe, PipeTransform } from '@angular/core';
import { BaseTypeEnum } from './enums/base-type.enum';

@Pipe({
  name: 'enumDescription'
})
export class EnumDescriptionPipe implements PipeTransform
{

  transform(value: string | null, types: BaseTypeEnum[]): string | null
  {
    if (value == null) return null  

    const e = types.filter(t => t.code == value)
    if (e.length == 0) return null
    if (e[0])
    {
      return e[0].name;
    }
    return '';
  }
}
