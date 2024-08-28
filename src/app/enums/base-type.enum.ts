export class BaseTypeEnum
{
  name: string;
  code: string;

  static All: BaseTypeEnum[] = [];

  constructor(name: string, code: string)
  {
    this.name = name;
    this.code = code;
  }
}
