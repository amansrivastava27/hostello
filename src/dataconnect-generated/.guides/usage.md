# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useAddNewReview, useGetHostelDetails, useCreateNewBooking, useGetAvailableRoomTypes } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useAddNewReview(addNewReviewVars);

const { data, isPending, isSuccess, isError, error } = useGetHostelDetails(getHostelDetailsVars);

const { data, isPending, isSuccess, isError, error } = useCreateNewBooking(createNewBookingVars);

const { data, isPending, isSuccess, isError, error } = useGetAvailableRoomTypes(getAvailableRoomTypesVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { addNewReview, getHostelDetails, createNewBooking, getAvailableRoomTypes } from '@dataconnect/generated';


// Operation AddNewReview:  For variables, look at type AddNewReviewVars in ../index.d.ts
const { data } = await AddNewReview(dataConnect, addNewReviewVars);

// Operation GetHostelDetails:  For variables, look at type GetHostelDetailsVars in ../index.d.ts
const { data } = await GetHostelDetails(dataConnect, getHostelDetailsVars);

// Operation CreateNewBooking:  For variables, look at type CreateNewBookingVars in ../index.d.ts
const { data } = await CreateNewBooking(dataConnect, createNewBookingVars);

// Operation GetAvailableRoomTypes:  For variables, look at type GetAvailableRoomTypesVars in ../index.d.ts
const { data } = await GetAvailableRoomTypes(dataConnect, getAvailableRoomTypesVars);


```