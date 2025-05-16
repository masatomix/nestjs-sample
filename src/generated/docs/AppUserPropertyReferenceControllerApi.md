# AppUserPropertyReferenceControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPropertyReferenceAppuserPatch**](#createpropertyreferenceappuserpatch) | **PATCH** /users/{id}/company | |
|[**createPropertyReferenceAppuserPut**](#createpropertyreferenceappuserput) | **PUT** /users/{id}/company | |
|[**deletePropertyReferenceAppuserDelete**](#deletepropertyreferenceappuserdelete) | **DELETE** /users/{id}/company | |
|[**deletePropertyReferenceIdAppuserDelete**](#deletepropertyreferenceidappuserdelete) | **DELETE** /users/{id}/company/{propertyId} | |
|[**followPropertyReferenceAppuserGet**](#followpropertyreferenceappuserget) | **GET** /users/{id}/company/{propertyId} | |
|[**followPropertyReferenceAppuserGet1**](#followpropertyreferenceappuserget1) | **GET** /users/{id}/company | |

# **createPropertyReferenceAppuserPatch**
> EntityModelCompany createPropertyReferenceAppuserPatch(collectionModelObject)

patch-company-by-appuser-Id

### Example

```typescript
import {
    AppUserPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceAppuserPatch(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceAppuserPut**
> EntityModelCompany createPropertyReferenceAppuserPut(collectionModelObject)

update-company-by-appuser-Id

### Example

```typescript
import {
    AppUserPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceAppuserPut(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelCompany**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePropertyReferenceAppuserDelete**
> deletePropertyReferenceAppuserDelete()

delete-company-by-appuser-Id

### Example

```typescript
import {
    AppUserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceAppuserDelete(
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

# **deletePropertyReferenceIdAppuserDelete**
> deletePropertyReferenceIdAppuserDelete()

delete-company-by-appuser-Id

### Example

```typescript
import {
    AppUserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdAppuserDelete(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


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

# **followPropertyReferenceAppuserGet**
> EntityModelCompany followPropertyReferenceAppuserGet()

get-company-by-appuser-Id

### Example

```typescript
import {
    AppUserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceAppuserGet(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


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

# **followPropertyReferenceAppuserGet1**
> EntityModelCompany followPropertyReferenceAppuserGet1()

get-company-by-appuser-Id

### Example

```typescript
import {
    AppUserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceAppuserGet1(
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
 - **Accept**: application/hal+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

