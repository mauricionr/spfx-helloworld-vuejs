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

const AppTemplate = `
<section id="root-app">
  <h3>Hello World</h3>
</section>
`;


@VueComponent({
  template: AppTemplate
})

default class AppComponent extends Vue {
  
}

export default class HelloWorldNoFrameworkWebPart extends BaseClientSideWebPart<IHelloWorldNoFrameworkWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    this.domElement.innerHTML = AppTemplate;
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
