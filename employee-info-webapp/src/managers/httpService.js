import { httpConstants } from "../constants";

export const httpService = (method, headers, data, url) => {
  const requestOptions = {
    method: method,
    headers: headers || { "Content-Type": "application/json" },
  };

  if (method !== httpConstants.METHOD_TYPE.GET)
    requestOptions.body = JSON.stringify(data);
  return fetch(url, requestOptions)
    .then(function handleResponse(response) {
      console.log("IAMIN")
      //in case API is down-
      if (!response || !response.ok)
        return Promise.reject("Unable to fetch data");

      return response.text().then((responseText) => {
        if (!responseText) return Promise.reject(responseText);

        let data;
        try {
          data =
            typeof responseText === "object"
              ? responseText
              : JSON.parse(responseText);
          if (data && !data.success)
            return Promise.reject(
              (data && data.responseCode) === 404
                ? data
                : (data && {
                    message: data.message,
                    responseCode: data.responseCode,
                    responseData: data.responseData,
                  }) ||
                    response.statusText
            );
        } catch (err) {
          return Promise.reject(err);
        }
        return data;
      });
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};
export const httpGetService = (method, headers, data, url) => {
  const requestOptions = {
    method: method,
    headers: headers || { "Content-Type": "application/json" },
  };

  if (method !== httpConstants.METHOD_TYPE.GET)
    requestOptions.body = JSON.stringify(data);
  return fetch(url, requestOptions)
    .then(function handleResponse(response) {
      return response.text().then((responseText) => {
        if (!responseText) return Promise.reject(responseText);
        let data;
        try {
          data =
            typeof responseText === "object"
              ? responseText
              : JSON.parse(responseText);
        } catch (err) {
          return Promise.reject(err);
        }
        return data;
      });
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};
