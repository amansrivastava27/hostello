import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddNewReviewData {
  review_insert: Review_Key;
}

export interface AddNewReviewVariables {
  bookingId: UUIDString;
  hostelId: UUIDString;
  userId: UUIDString;
  comment?: string | null;
  rating: number;
}

export interface Booking_Key {
  id: UUIDString;
  __typename?: 'Booking_Key';
}

export interface CreateNewBookingData {
  booking_insert: Booking_Key;
}

export interface CreateNewBookingVariables {
  roomTypeId: UUIDString;
  checkInDate: DateString;
  checkOutDate: DateString;
  numberOfGuests: number;
  specialRequests?: string | null;
  totalAmount: number;
}

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

export interface GetAvailableRoomTypesVariables {
  hostelId: UUIDString;
  capacity: number;
}

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

export interface GetHostelDetailsVariables {
  id: UUIDString;
}

export interface Hostel_Key {
  id: UUIDString;
  __typename?: 'Hostel_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface RoomType_Key {
  id: UUIDString;
  __typename?: 'RoomType_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddNewReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
  operationName: string;
}
export const addNewReviewRef: AddNewReviewRef;

export function addNewReview(vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;
export function addNewReview(dc: DataConnect, vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;

interface GetHostelDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHostelDetailsVariables): QueryRef<GetHostelDetailsData, GetHostelDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetHostelDetailsVariables): QueryRef<GetHostelDetailsData, GetHostelDetailsVariables>;
  operationName: string;
}
export const getHostelDetailsRef: GetHostelDetailsRef;

export function getHostelDetails(vars: GetHostelDetailsVariables): QueryPromise<GetHostelDetailsData, GetHostelDetailsVariables>;
export function getHostelDetails(dc: DataConnect, vars: GetHostelDetailsVariables): QueryPromise<GetHostelDetailsData, GetHostelDetailsVariables>;

interface CreateNewBookingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewBookingVariables): MutationRef<CreateNewBookingData, CreateNewBookingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewBookingVariables): MutationRef<CreateNewBookingData, CreateNewBookingVariables>;
  operationName: string;
}
export const createNewBookingRef: CreateNewBookingRef;

export function createNewBooking(vars: CreateNewBookingVariables): MutationPromise<CreateNewBookingData, CreateNewBookingVariables>;
export function createNewBooking(dc: DataConnect, vars: CreateNewBookingVariables): MutationPromise<CreateNewBookingData, CreateNewBookingVariables>;

interface GetAvailableRoomTypesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAvailableRoomTypesVariables): QueryRef<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAvailableRoomTypesVariables): QueryRef<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
  operationName: string;
}
export const getAvailableRoomTypesRef: GetAvailableRoomTypesRef;

export function getAvailableRoomTypes(vars: GetAvailableRoomTypesVariables): QueryPromise<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
export function getAvailableRoomTypes(dc: DataConnect, vars: GetAvailableRoomTypesVariables): QueryPromise<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;

