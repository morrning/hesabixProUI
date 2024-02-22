
const validator = (input:string,type:string) :boolean | any =>{
  if(type == 'fill'){
    if (input?.length > 0) return true
    return this.$t('validator.required')
  }
  else if(type == 'email'){
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(input)) return true
    return this.$t('validator.email_not_valid')
  }
  else if(type == 'password'){
    if(input == undefined ) {
      return false
    }
    else if (input.length > 8) return true
    return this.$t('validator.password_len_lower')
  }
  else if(type == 'mobile'){
    if(input == undefined ) {
      return false
    }
    else if (input.length > 8) return true
    return this.$t('validator.password_len_lower')
  }
};
export default validator;
