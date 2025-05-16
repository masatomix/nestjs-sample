# AppUserEntityControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceAppuserDelete**](#deleteitemresourceappuserdelete) | **DELETE** /users/{id} | |
|[**getCollectionResourceAppuserGet1**](#getcollectionresourceappuserget1) | **GET** /users | |
|[**getItemResourceAppuserGet**](#getitemresourceappuserget) | **GET** /users/{id} | |
|[**patchItemResourceAppuserPatch**](#patchitemresourceappuserpatch) | **PATCH** /users/{id} | |
|[**postCollectionResourceAppuserPost**](#postcollectionresourceappuserpost) | **POST** /users | |
|[**putItemResourceAppuserPut**](#putitemresourceappuserput) | **PUT** /users/{id} | |

# **deleteItemResourceAppuserDelete**
> deleteItemResourceAppuserDelete()

delete-appuser

### Example

```typescript
import {
    AppUserEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceAppuserDelete(
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

# **getCollectionResourceAppuserGet1**
> PagedModelEntityModelAppUser getCollectionResourceAppuserGet1()

get-appuser

### Example

```typescript
import {
    AppUserEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserEntityControllerApi(configuration);

let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getCollectionResourceAppuserGet1(
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

**PagedModelEntityModelAppUser**

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

# **getItemResourceAppuserGet**
> EntityModelAppUser getItemResourceAppuserGet()

get-appuser

### Example

```typescript
import {
    AppUserEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceAppuserGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelAppUser**

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

# **patchItemResourceAppuserPatch**
> EntityModelAppUser patchItemResourceAppuserPatch(appUserRequestBody)

patch-appuser

### Example

```typescript
import {
    AppUserEntityControllerApi,
    Configuration,
    AppUserRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserEntityControllerApi(configuration);

let id: string; // (default to undefined)
let appUserRequestBody: AppUserRequestBody; //

const { status, data } = await apiInstance.patchItemResourceAppuserPatch(
    id,
    appUserRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUserRequestBody** | **AppUserRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelAppUser**

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

# **postCollectionResourceAppuserPost**
> EntityModelAppUser postCollectionResourceAppuserPost(appUserRequestBody)

create-appuser

### Example

```typescript
import {
    AppUserEntityControllerApi,
    Configuration,
    AppUserRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserEntityControllerApi(configuration);

let appUserRequestBody: AppUserRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceAppuserPost(
    appUserRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUserRequestBody** | **AppUserRequestBody**|  | |


### Return type

**EntityModelAppUser**

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

# **putItemResourceAppuserPut**
> EntityModelAppUser putItemResourceAppuserPut(appUserRequestBody)

update-appuser

### Example

```typescript
import {
    AppUserEntityControllerApi,
    Configuration,
    AppUserRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserEntityControllerApi(configuration);

let id: string; // (default to undefined)
let appUserRequestBody: AppUserRequestBody; //

const { status, data } = await apiInstance.putItemResourceAppuserPut(
    id,
    appUserRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUserRequestBody** | **AppUserRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelAppUser**

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

