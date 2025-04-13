import type {UseFetchOptions} from "#app";

export async function useNaiveFetch<T>(
    url: string | (() => string),
    options ?: UseFetchOptions<T>
) {
  const {data, error} = await useAppFetch<T>(url, options)

  if (error.value) {
    throw createError({
      ...error.value,
      fatal: true
    })
  }

  // statusCode: error.value.statusCode ?? 500,
  //     message: error.value.statusCode === 400 ? "Page not found" : "Undefined error"

  return data as Ref<T>
}