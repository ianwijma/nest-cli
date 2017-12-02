export interface Template {
  content: string;
}

export interface Token {
  name: string;
  value: string;
}

export class TemplateReplacer {
  constructor() {}

  public replace(template: Template, tokens: Token[]): Template {
    return {
      content: this.replaceTokens(template.content, tokens)
    };
  }

  private replaceTokens(content: string, tokens: Token[]): string {
    return tokens.reduce((currentContent, token) => currentContent.replace(token.name, token.value), content);
  }
}