# CompanyEntityControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceCompanyDelete**](#deleteitemresourcecompanydelete) | **DELETE** /companies/{id} | |
|[**getCollectionResourceCompanyGet1**](#getcollectionresourcecompanyget1) | **GET** /companies | |
|[**getItemResourceCompanyGet**](#getitemresourcecompanyget) | **GET** /companies/{id} | |
|[**patchItemResourceCompanyPatch**](#patchitemresourcecompanypatch) | **PATCH** /companies/{id} | |
|[**postCollectionResourceCompanyPost**](#postcollectionresourcecompanypost) | **POST** /companies | |
|[**putItemResourceCompanyPut**](#putitemresourcecompanyput) | **PUT** /companies/{id} | |

# **deleteItemResourceCompanyDelete**
> deleteItemResourceCompanyDelete()

delete-company

### Example

```typescript
import {
    CompanyEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompanyEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceCompanyDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollectionResourceCompanyGet1**
> PagedModelEntityModelCompany getCollectionResourceCompanyGet1()

get-company

### Example

```typescript
import {
    CompanyEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompanyEntityControllerApi(configuration);

let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getCollectionResourceCompanyGet1(
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**PagedModelEntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json, application/x-spring-data-compact+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getItemResourceCompanyGet**
> EntityModelCompany getItemResourceCompanyGet()

get-company

### Example

```typescript
import {
    CompanyEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompanyEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceCompanyGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchItemResourceCompanyPatch**
> EntityModelCompany patchItemResourceCompanyPatch(companyRequestBody)

patch-company

### Example

```typescript
import {
    CompanyEntityControllerApi,
    Configuration,
    CompanyRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new CompanyEntityControllerApi(configuration);

let id: string; // (default to undefined)
let companyRequestBody: CompanyRequestBody; //

const { status, data } = await apiInstance.patchItemResourceCompanyPatch(
    id,
    companyRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyRequestBody** | **CompanyRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCollectionResourceCompanyPost**
> EntityModelCompany postCollectionResourceCompanyPost(companyRequestBody)

create-company

### Example

```typescript
import {
    CompanyEntityControllerApi,
    Configuration,
    CompanyRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new CompanyEntityControllerApi(configuration);

let companyRequestBody: CompanyRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceCompanyPost(
    companyRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyRequestBody** | **CompanyRequestBody**|  | |


### Return type

**EntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putItemResourceCompanyPut**
> EntityModelCompany putItemResourceCompanyPut(companyRequestBody)

update-company

### Example

```typescript
import {
    CompanyEntityControllerApi,
    Configuration,
    CompanyRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new CompanyEntityControllerApi(configuration);

let id: string; // (default to undefined)
let companyRequestBody: CompanyRequestBody; //

const { status, data } = await apiInstance.putItemResourceCompanyPut(
    id,
    companyRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyRequestBody** | **CompanyRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

