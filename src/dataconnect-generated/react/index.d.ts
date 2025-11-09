import { AddNewReviewData, AddNewReviewVariables, GetHostelDetailsData, GetHostelDetailsVariables, CreateNewBookingData, CreateNewBookingVariables, GetAvailableRoomTypesData, GetAvailableRoomTypesVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddNewReview(options?: useDataConnectMutationOptions<AddNewReviewData, FirebaseError, AddNewReviewVariables>): UseDataConnectMutationResult<AddNewReviewData, AddNewReviewVariables>;
export function useAddNewReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewReviewData, FirebaseError, AddNewReviewVariables>): UseDataConnectMutationResult<AddNewReviewData, AddNewReviewVariables>;

export function useGetHostelDetails(vars: GetHostelDetailsVariables, options?: useDataConnectQueryOptions<GetHostelDetailsData>): UseDataConnectQueryResult<GetHostelDetailsData, GetHostelDetailsVariables>;
export function useGetHostelDetails(dc: DataConnect, vars: GetHostelDetailsVariables, options?: useDataConnectQueryOptions<GetHostelDetailsData>): UseDataConnectQueryResult<GetHostelDetailsData, GetHostelDetailsVariables>;

export function useCreateNewBooking(options?: useDataConnectMutationOptions<CreateNewBookingData, FirebaseError, CreateNewBookingVariables>): UseDataConnectMutationResult<CreateNewBookingData, CreateNewBookingVariables>;
export function useCreateNewBooking(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewBookingData, FirebaseError, CreateNewBookingVariables>): UseDataConnectMutationResult<CreateNewBookingData, CreateNewBookingVariables>;

export function useGetAvailableRoomTypes(vars: GetAvailableRoomTypesVariables, options?: useDataConnectQueryOptions<GetAvailableRoomTypesData>): UseDataConnectQueryResult<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
export function useGetAvailableRoomTypes(dc: DataConnect, vars: GetAvailableRoomTypesVariables, options?: useDataConnectQueryOptions<GetAvailableRoomTypesData>): UseDataConnectQueryResult<GetAvailableRoomTypesData, GetAvailableRoomTypesVariables>;
