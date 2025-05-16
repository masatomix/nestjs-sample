# ProfileControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**descriptor111**](#descriptor111) | **GET** /profile/companies | |
|[**descriptor112**](#descriptor112) | **GET** /profile/users | |
|[**listAllFormsOfMetadata1**](#listallformsofmetadata1) | **GET** /profile | |

# **descriptor111**
> string descriptor111()


### Example

```typescript
import {
    ProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileControllerApi(configuration);

const { status, data } = await apiInstance.descriptor111();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/alps+json, application/schema+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **descriptor112**
> string descriptor112()


### Example

```typescript
import {
    ProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileControllerApi(configuration);

const { status, data } = await apiInstance.descriptor112();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/alps+json, application/schema+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAllFormsOfMetadata1**
> RepresentationModelObject listAllFormsOfMetadata1()


### Example

```typescript
import {
    ProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileControllerApi(configuration);

const { status, data } = await apiInstance.listAllFormsOfMetadata1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RepresentationModelObject**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

