# AppUserSearchControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchAppuserGet**](#executesearchappuserget) | **GET** /users/search/findAllUsersWithCompaCompany | |

# **executeSearchAppuserGet**
> CollectionModelEntityModelAppUser executeSearchAppuserGet()


### Example

```typescript
import {
    AppUserSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppUserSearchControllerApi(configuration);

const { status, data } = await apiInstance.executeSearchAppuserGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelAppUser**

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

