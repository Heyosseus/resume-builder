 export const validateGeorgian = (value: string): boolean | string => {
    const pattern = /^[\u10A0-\u10FF]+$/;
     if (!pattern.test(value)) return false;
     return true;
  };
 export const validateGeorgianPhone = (value: any) => {
    const phoneRegex = /^(\+995\s)?(5[0-9]{2}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2})$/;
    if (!phoneRegex.test(value)) return false;
    return true;
  };
  export const validateEmail = (value: string) => {
    const emailRegex = /^[\wა-ჰ]+([.-][\wა-ჰ]+)*@redberry.ge$/;
    if (!emailRegex.test(value)) return false;
    return true;
  };