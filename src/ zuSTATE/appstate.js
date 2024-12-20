import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useAppstate = create(
    persist(
        (set) => ({
            user: "It's a me Mario!",
            setUser: (user) => set({ user: user }),
            logOut: () => set({ user: "Guest" }),

            userTags: [],
            setUserTags: (tags) => set({ userTags: tags }),
            addUserTag: (tag) => set((state) => ({ userTags: [...state.userTags, tag] })),
            removeUserTag: (tag) => set((state) => ({ userTags: state.userTags.filter(t => t !== tag) })),
            removeAllUserTags: () => set({ userTags: [] }),

            userEvents: [],
            setUserEvents: (events) => set({ userEvents: events }),
            addUserEvent: (event) => set((state) => ({ userEvents: [...state.userEvents, event] })),
            removeUserEvent: (event) => set((state) => ({ userEvents: state.userEvents.filter(e => e !== event) })),
        }),
        {
            name: 'partysan-local-store',
        }
    )
)

export default useAppstate;


