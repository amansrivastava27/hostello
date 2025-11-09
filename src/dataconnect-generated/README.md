# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetHostelDetails*](#gethosteldetails)
  - [*GetAvailableRoomTypes*](#getavailableroomtypes)
- [**Mutations**](#mutations)
  - [*AddNewReview*](#addnewreview)
  - [*CreateNewBooking*](#createnewbooking)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetHostelDetails
You can execute the `GetHostelDetails` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getHostelDetails(vars: GetHostelDetailsVariables): QueryPromise<GetHostelDetailsData, GetHostelDetailsVariables>;

interface GetHostelDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHostelDetailsVariables): QueryRef<GetHostelDetailsData, GetHostelDetailsVariables>;
}
export const getHostelDetailsRef: GetHostelDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getHostelDetails(dc: DataConnect, vars: GetHostelDetailsVariables): QueryPromise<GetHostelDetailsData, GetHostelDetailsVariables>;

interface GetHostelDetailsRef {
  ...
  (dc: DataConnect, vars: GetHostelDetailsVariables): QueryRef<GetHostelDetailsData, GetHostelDetailsVariables>;
}
export const getHostelDetailsRef: GetHostelDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getHostelDetailsRef:
```typescript
const name = getHostelDetailsRef.operationName;
console.log(name);
```

### Variables
The `GetHostelDetails` query requires an argument of type `GetHostelDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetHostelDetailsVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetHostelDetails` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetHostelDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetHostelDetailsData {
  hostel?: {
    id: UUIDString;
    name: string;
    address: string;
    city: string;
    country: string;
    description?: string | null;
    averageRating?: number | null;
    email?: string | null;
    phoneNumber?: string | null;
    website?: string | null;
    roomTypes_on_hostel: ({
      id: UUIDString;
      name: string;
      description?: string | null;
      capacity: number;
      amenities?: string[] | null;
      pricePerNight: number;
    } & RoomType_Key)[];
      reviews_on_hostel: ({
        id: UUIDString;
        userId: UUIDString;
        comment?: string | null;
        rating: number;
        createdAt: TimestampString;
      } & Review_Key)[];
  } & Hostel_Key;
}
```
### Using `GetHostelDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getHostelDetails, GetHostelDetailsVariables } from '@dataconnect/generated';

// The `GetHostelDetails` query requires an argument of type `GetHostelDetailsVariables`:
const getHostelDetailsVars: GetHostelDetailsVariables = {
  id: ..., 
};

// Call the `getHostelDetails()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getHostelDetails(getHostelDetailsVars);
// Variables can be defined inline as well.
const { data } = await getHostelDetails({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getHostelDetails(dataConnect, getHostelDetailsVars);

console.log(data.hostel);

// Or, you can use the `Promise` API.
getHostelDetails(getHostelDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.hostel);
});
```

### Using `GetHostelDetails`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getHostelDetailsRef, GetHostelDetailsVariables } from '@dataconnect/generated';

// The `GetHostelDetails` query requires an argument of type `GetHostelDetailsVariables`:
const getHostelDetailsVars: GetHostelDetailsVariables = {
  id: ..., 
};

// Call the `getHostelDetailsRef()` function to get a reference to the query.
const ref = getHostelDetailsRef(getHostelDetailsVars);
// Variables can be defined inline as well.
const ref = getHostelDetailsRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getHostelDetailsRef(dataConnect, getHostelDetailsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.hostel);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.hostel);
});
```

## GetAvailableRoomTypes
You can execute the `GetAvailableRoomTypes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAvailableRoomTypes(vars: GetAvailableRoomTypesVariables): QueryPromise<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;

interface GetAvailableRoomTypesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAvailableRoomTypesVariables): QueryRef<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
}
export const getAvailableRoomTypesRef: GetAvailableRoomTypesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAvailableRoomTypes(dc: DataConnect, vars: GetAvailableRoomTypesVariables): QueryPromise<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;

interface GetAvailableRoomTypesRef {
  ...
  (dc: DataConnect, vars: GetAvailableRoomTypesVariables): QueryRef<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
}
export const getAvailableRoomTypesRef: GetAvailableRoomTypesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAvailableRoomTypesRef:
```typescript
const name = getAvailableRoomTypesRef.operationName;
console.log(name);
```

### Variables
The `GetAvailableRoomTypes` query requires an argument of type `GetAvailableRoomTypesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAvailableRoomTypesVariables {
  hostelId: UUIDString;
  capacity: number;
}
```
### Return Type
Recall that executing the `GetAvailableRoomTypes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAvailableRoomTypesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAvailableRoomTypesData {
  roomTypes: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    capacity: number;
    amenities?: string[] | null;
    pricePerNight: number;
  } & RoomType_Key)[];
}
```
### Using `GetAvailableRoomTypes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAvailableRoomTypes, GetAvailableRoomTypesVariables } from '@dataconnect/generated';

// The `GetAvailableRoomTypes` query requires an argument of type `GetAvailableRoomTypesVariables`:
const getAvailableRoomTypesVars: GetAvailableRoomTypesVariables = {
  hostelId: ..., 
  capacity: ..., 
};

// Call the `getAvailableRoomTypes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAvailableRoomTypes(getAvailableRoomTypesVars);
// Variables can be defined inline as well.
const { data } = await getAvailableRoomTypes({ hostelId: ..., capacity: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAvailableRoomTypes(dataConnect, getAvailableRoomTypesVars);

console.log(data.roomTypes);

// Or, you can use the `Promise` API.
getAvailableRoomTypes(getAvailableRoomTypesVars).then((response) => {
  const data = response.data;
  console.log(data.roomTypes);
});
```

### Using `GetAvailableRoomTypes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAvailableRoomTypesRef, GetAvailableRoomTypesVariables } from '@dataconnect/generated';

// The `GetAvailableRoomTypes` query requires an argument of type `GetAvailableRoomTypesVariables`:
const getAvailableRoomTypesVars: GetAvailableRoomTypesVariables = {
  hostelId: ..., 
  capacity: ..., 
};

// Call the `getAvailableRoomTypesRef()` function to get a reference to the query.
const ref = getAvailableRoomTypesRef(getAvailableRoomTypesVars);
// Variables can be defined inline as well.
const ref = getAvailableRoomTypesRef({ hostelId: ..., capacity: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAvailableRoomTypesRef(dataConnect, getAvailableRoomTypesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.roomTypes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.roomTypes);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddNewReview
You can execute the `AddNewReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewReview(vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;

interface AddNewReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
}
export const addNewReviewRef: AddNewReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewReview(dc: DataConnect, vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;

interface AddNewReviewRef {
  ...
  (dc: DataConnect, vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
}
export const addNewReviewRef: AddNewReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewReviewRef:
```typescript
const name = addNewReviewRef.operationName;
console.log(name);
```

### Variables
The `AddNewReview` mutation requires an argument of type `AddNewReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddNewReviewVariables {
  bookingId: UUIDString;
  hostelId: UUIDString;
  userId: UUIDString;
  comment?: string | null;
  rating: number;
}
```
### Return Type
Recall that executing the `AddNewReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewReviewData {
  review_insert: Review_Key;
}
```
### Using `AddNewReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewReview, AddNewReviewVariables } from '@dataconnect/generated';

// The `AddNewReview` mutation requires an argument of type `AddNewReviewVariables`:
const addNewReviewVars: AddNewReviewVariables = {
  bookingId: ..., 
  hostelId: ..., 
  userId: ..., 
  comment: ..., // optional
  rating: ..., 
};

// Call the `addNewReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewReview(addNewReviewVars);
// Variables can be defined inline as well.
const { data } = await addNewReview({ bookingId: ..., hostelId: ..., userId: ..., comment: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewReview(dataConnect, addNewReviewVars);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
addNewReview(addNewReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `AddNewReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewReviewRef, AddNewReviewVariables } from '@dataconnect/generated';

// The `AddNewReview` mutation requires an argument of type `AddNewReviewVariables`:
const addNewReviewVars: AddNewReviewVariables = {
  bookingId: ..., 
  hostelId: ..., 
  userId: ..., 
  comment: ..., // optional
  rating: ..., 
};

// Call the `addNewReviewRef()` function to get a reference to the mutation.
const ref = addNewReviewRef(addNewReviewVars);
// Variables can be defined inline as well.
const ref = addNewReviewRef({ bookingId: ..., hostelId: ..., userId: ..., comment: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewReviewRef(dataConnect, addNewReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

## CreateNewBooking
You can execute the `CreateNewBooking` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewBooking(vars: CreateNewBookingVariables): MutationPromise<CreateNewBookingData, CreateNewBookingVariables>;

interface CreateNewBookingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewBookingVariables): MutationRef<CreateNewBookingData, CreateNewBookingVariables>;
}
export const createNewBookingRef: CreateNewBookingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewBooking(dc: DataConnect, vars: CreateNewBookingVariables): MutationPromise<CreateNewBookingData, CreateNewBookingVariables>;

interface CreateNewBookingRef {
  ...
  (dc: DataConnect, vars: CreateNewBookingVariables): MutationRef<CreateNewBookingData, CreateNewBookingVariables>;
}
export const createNewBookingRef: CreateNewBookingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewBookingRef:
```typescript
const name = createNewBookingRef.operationName;
console.log(name);
```

### Variables
The `CreateNewBooking` mutation requires an argument of type `CreateNewBookingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewBookingVariables {
  roomTypeId: UUIDString;
  checkInDate: DateString;
  checkOutDate: DateString;
  numberOfGuests: number;
  specialRequests?: string | null;
  totalAmount: number;
}
```
### Return Type
Recall that executing the `CreateNewBooking` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewBookingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewBookingData {
  booking_insert: Booking_Key;
}
```
### Using `CreateNewBooking`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewBooking, CreateNewBookingVariables } from '@dataconnect/generated';

// The `CreateNewBooking` mutation requires an argument of type `CreateNewBookingVariables`:
const createNewBookingVars: CreateNewBookingVariables = {
  roomTypeId: ..., 
  checkInDate: ..., 
  checkOutDate: ..., 
  numberOfGuests: ..., 
  specialRequests: ..., // optional
  totalAmount: ..., 
};

// Call the `createNewBooking()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewBooking(createNewBookingVars);
// Variables can be defined inline as well.
const { data } = await createNewBooking({ roomTypeId: ..., checkInDate: ..., checkOutDate: ..., numberOfGuests: ..., specialRequests: ..., totalAmount: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewBooking(dataConnect, createNewBookingVars);

console.log(data.booking_insert);

// Or, you can use the `Promise` API.
createNewBooking(createNewBookingVars).then((response) => {
  const data = response.data;
  console.log(data.booking_insert);
});
```

### Using `CreateNewBooking`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewBookingRef, CreateNewBookingVariables } from '@dataconnect/generated';

// The `CreateNewBooking` mutation requires an argument of type `CreateNewBookingVariables`:
const createNewBookingVars: CreateNewBookingVariables = {
  roomTypeId: ..., 
  checkInDate: ..., 
  checkOutDate: ..., 
  numberOfGuests: ..., 
  specialRequests: ..., // optional
  totalAmount: ..., 
};

// Call the `createNewBookingRef()` function to get a reference to the mutation.
const ref = createNewBookingRef(createNewBookingVars);
// Variables can be defined inline as well.
const ref = createNewBookingRef({ roomTypeId: ..., checkInDate: ..., checkOutDate: ..., numberOfGuests: ..., specialRequests: ..., totalAmount: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewBookingRef(dataConnect, createNewBookingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.booking_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.booking_insert);
});
```

