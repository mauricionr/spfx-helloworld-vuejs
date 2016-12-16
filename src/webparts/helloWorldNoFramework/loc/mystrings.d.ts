declare interface IHelloWorldNoFrameworkStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloWorldNoFrameworkStrings' {
  const strings: IHelloWorldNoFrameworkStrings;
  export = strings;
}
