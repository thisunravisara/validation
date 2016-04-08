export declare class Validation {
    static getValidatorErrorMessage(code: string): any;
    static creditCardValidator(control: any): {
        'invalidCreditCard': boolean;
    };
    static emailValidator(control: any): {
        'invalidEmailAddress': boolean;
    };
    static passwordValidator(control: any): {
        'invalidPassword': boolean;
    };
}
