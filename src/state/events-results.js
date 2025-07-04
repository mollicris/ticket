import { create } from "zustand";

//Store para guardar valores de manera global
const useEventsResults = create((set) => ({
  data: [],
  error:null,
  isLoading: false,
  fetchEvents : async (params) => {
        try {
            const YOUR_API_KEY = "enSY7Tyrr2tR3EvmACC69vqwynbN9SJd"; // Replace with your actual API key
            await set(() => ({isLoading: true}));   
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=${YOUR_API_KEY}${params?.length ? params : ''}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            await set(() => ({data,isLoading: false}));
        } catch (error) {
            await set(() => ({error,isLoading: false}));
        } finally {
            await set(() => ({isLoading: false}));
        }
    },
}));

export default useEventsResults;
