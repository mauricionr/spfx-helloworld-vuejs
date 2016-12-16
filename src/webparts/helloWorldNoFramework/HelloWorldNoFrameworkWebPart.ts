import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import styles from './HelloWorldNoFramework.module.scss';
import * as strings from 'helloWorldNoFrameworkStrings';
import { IHelloWorldNoFrameworkWebPartProps } from './IHelloWorldNoFrameworkWebPartProps';
import { VueComponent } from 'vue-typescript';

export default class HelloWorldNoFrameworkWebPart extends BaseClientSideWebPart<IHelloWorldNoFrameworkWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    this.domElement.innerHTML = '<section id="app">Hello world</section>'
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', { label: strings.DescriptionFieldLabel })
              ]
            }
          ]
        }
      ]
    };
  }
}
