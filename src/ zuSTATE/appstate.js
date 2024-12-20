import { create } from 'zustand'

const useAppstate = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),

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

    // userRoles: [],
    // setUserRoles: (roles) => set({ userRoles: roles }),
    // addUserRole: (role) => set((state) => ({ userRoles: [...state.userRoles, role] })),
    // removeUserRole: (role) => set((state) => ({ userRoles: state.userRoles.filter(r => r !== role) })),
}))

export default useAppstate;


