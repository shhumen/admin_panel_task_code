export const requestInterceptor = (config: any) => config;
export const requestErrorInterceptor = (error: any) => Promise.reject(error);
export const responseInterceptor = (response: any) => response;

export const responseErrorInterceptor = (error: any) => {
  const { response } = error;

  if (response && response.data.error) {
    const { message, code, details } = response.data.error;
    const errorTitle = message ? message : "Aplication Error";
    const errorCode = code ? code : "Error Code";
    const errorDetails = details ? details : "UnknowError";

    console.log({
      title: errorTitle,
      content: errorDetails,
      code: errorCode,
    });
  } else {
    console.log({ content: "UnknowError" });
  }

  Promise.reject(error);
};
