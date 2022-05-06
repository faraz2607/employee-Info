export const httpConstants = {
    METHOD_TYPE: {
      POST: "POST",
      PUT: "PUT",
      PATCH: "PATCH",
      GET: "GET",
      DELETE: "DELETE",
    },
    CONTENT_TYPE: {
      APPLICATION_JSON: "application/json",
      MULTIPART_FORM_DATA: "multipart/form-data",
      APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
      IMAGE_PNG: "image/png",
    },
    DEVICE_TYPE: {
      WEB: "web",
    },
    API_END_POINT: {
        EMPLOYEE: "employee",
        FABRIC: "fabric",
    },
  };
  
  export const cookiesConstants = {
    //related to cookies 
    CURRENT_LUNGI_WEAVING_RATE: "CURRENT_LUNGI_WEAVING_RATE"
  };
  
  export const eventConstants = {
    //related to sevents
    HIDE_LOADER: "HIDE_LOADER",
    SHOW_LOADER: "SHOW_LOADER",
    CHANGE_LUNGI_WEAVING_RATE: "CHANGE_LUNGI_WEAVING_RATE"
  };
  
  export const genericConstants = {
    INCORRECT_USERNAME_PASS: "Incorrect username or password",
  };
  
  export const statusConstants = {
    PENDING: "PENDING",
    INACTIVE: "INACTIVE",
    INVITED: "INVITED",
    ACTIVE: "ACTIVE",
    PUBLISHED: "PUBLISHED",
    REJECTED: "REJECTED",
  };
  
  export const toastMessages = {
    SUCCESS_FABRIC: 'Successfully added fabric',
    FAILED_FABRIC: 'Failed to add fabric',
    SUCCESS_EMPLOYEE: 'Successfully added employee',
    FAILED_EMPLOYEE: 'Failed to add employee',
  };
  
  export const toolTipMessages = {
    faraz: "Faraz Ahmad",
  };
  
  
  export const authenticationProvider = {
    AUTH0: "AUTH0",
  };
  