import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../HTTP/settings";

const initialState = {
    popularCoctail: [],
    infoCoctail: [],
    popularIngredient: [],
    infoIngredient: [],
    latestDrink: [],
    randomIngredient: [],
    randomDrink: [],
    alphabet: [],
    search: [],
    text: "",

};

export const getPopularCoctail = createAsyncThunk(
    "popularCoctail/getPopularCoctail",
    async (_, { rejectWhithValue, dispatch }) => {
        try {
            const popular_coctails_id = [11000, 11001, 11002, 11003, 11004, 11005, 11006, 11007];
            const result = await Promise.all(
                popular_coctails_id.map(async (coctailsId) => {
                    const res = await instance.get(`lookup.php?i=${coctailsId}`);
                    return res.data.drinks
                })
            )
            const combinedCoctails = result.flat();
            dispatch(popularDrinks(combinedCoctails));
        } catch (error) {
            rejectWhithValue(error.massage)
        }
    }
);

export const getInfoCoctail = createAsyncThunk(
    "infoCoctail/getInfoCoctail",
    async (elem, { rejectWhithValue, dispatch }) => {
        const res = await instance.get(`lookup.php?i=${elem}`);
        dispatch(infoDrink(res.data.drinks));
    }
);

export const getpopularIngredient = createAsyncThunk(
    "popularIngredient/getpopularIngredient",
    async (_, { rejectWhithValue, dispatch }) => {
        const res = await instance.get(`list.php?i=list`);
        dispatch(ingredientPopular(res.data.drinks));
        dispatch(getRandomIngredients(res.data.drinks));
    }
);

export const getInfoIngredient = createAsyncThunk(
    "infoIngredient/getInfoIngredient",
    async (elem, { rejectWhithValue, dispatch }) => {
        const res = await instance.get(`filter.php?i=${elem}`);
        dispatch(ingredientInfo(res.data.drinks))
    }
);

export const getLatestDrink = createAsyncThunk(
    "latestDrink/getLatestDrink",
    async (_, { rejectWhithValue, dispatch }) => {
        try {
            const latestId = [178371, 178370, 178369, 178368, 178367, 178366, 178365, 178364];
            const result = await Promise.all(
                latestId.map(async (id) => {
                    const res = await instance.get(`lookup.php?i=${id}`);
                    return res.data.drinks
                })
            )
            const combinedCoctails = result.flat();
            dispatch(latestDrinks(combinedCoctails));
        } catch (error) {
            rejectWhithValue(error.massage)
        }
    }
);

export const getRandomDrink = createAsyncThunk(
    "randomDrinks/getRandomDrink",
    async (_, {rejectWhithValue, dispatch}) => {
        try {
            const random = [1, 2, 3, 4, 5, 6, 7, 8];
            const result = await Promise.all(
                random.map(() => instance.get(`random.php`))
            );
            const randomDrinksData = result.map(
                (res) => res.data.drinks[0]
            );
            dispatch(randomDrinks(randomDrinksData));
        } catch (error) {
            rejectWhithValue("Error fetching random coctail", error)
        }
    }
);

export const getAlphabet = createAsyncThunk(
    "alphabet/getAlphabet",
    async (elem, {rejectWhithValue, dispatch}) => {
        const res = await instance.get(`search.php?f=${elem}`);
        dispatch(alphabetSearch(res.data.drinks));
    }
);

export const getSearch = createAsyncThunk(
    "search/getSearch",
    async (elem, {rejectWhithValue, dispatch}) => {
        const res = await instance.get(`search.php?s=${elem}`);
        dispatch(searchDrink(res.data.drinks));
    }
);

const coctailSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        popularDrinks: (state, action) => {
            state.popularCoctail = action.payload;
        },
        infoDrink: (state, action) => {
            state.infoCoctail = action.payload;
        },
        ingredientPopular: (state, action) => {
            state.popularIngredient = action.payload;
        },
        ingredientInfo: (state, action) => {
            state.infoIngredient = action.payload;
        },
        latestDrinks: (state, action) => {
            state.latestDrink = action.payload;
        },
        getRandomIngredients: (state, action) => {
            state.randomIngredient = action.payload;
        },
        randomDrinks: (state, action) => {
            state.randomDrink = action.payload;
        },
        alphabetSearch: (state, action) => {
            state.alphabet = action.payload;
        },
        searchDrink: (state, action) => {
            state.search = action.payload;
        },
        onDescription: (state, action) => {
            state.text = action.payload;
        },
    }
});

export const {
    popularDrinks,
    infoDrink,
    ingredientPopular,
    ingredientInfo,
    latestDrinks,
    getRandomIngredients,
    randomDrinks,
    alphabetSearch,
    searchDrink,
    onDescription,
} = coctailSlice.actions;

export default coctailSlice.reducer;