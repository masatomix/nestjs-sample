# SampleRequestsApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllCustomizedUsers**](#getallcustomizedusers) | **GET** /customized_users | サンプル(summary)|

# **getAllCustomizedUsers**
> Array<AppUser> getAllCustomizedUsers()

サンプル(desc) 

### Example

```typescript
import {
    SampleRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SampleRequestsApi(configuration);

const { status, data } = await apiInstance.getAllCustomizedUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AppUser>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 (OK) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

