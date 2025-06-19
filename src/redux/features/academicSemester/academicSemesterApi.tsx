import { baseApi } from "../../api/basApi";

const academeicSemesterAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: "//academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = academeicSemesterAPi;
