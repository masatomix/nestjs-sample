# CustomizedUsersApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**findAppUserById**](#findappuserbyid) | **GET** /customized_users/findAppUserById | |
|[**getAllCustomizedUsers**](#getallcustomizedusers) | **GET** /customized_users | サンプル(summary)|
|[**saveUser**](#saveuser) | **POST** /customized_users | |

# **findAppUserById**
> AppUser findAppUserById()


### Example

```typescript
import {
    CustomizedUsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizedUsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.findAppUserById(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**AppUser**

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

# **getAllCustomizedUsers**
> Array<AppUser> getAllCustomizedUsers()

サンプル(desc) 

### Example

```typescript
import {
    CustomizedUsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizedUsersApi(configuration);

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

# **saveUser**
> AppUser saveUser(appUser)


### Example

```typescript
import {
    CustomizedUsersApi,
    Configuration,
    AppUser
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizedUsersApi(configuration);

let appUser: AppUser; //

const { status, data } = await apiInstance.saveUser(
    appUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUser** | **AppUser**|  | |


### Return type

**AppUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

