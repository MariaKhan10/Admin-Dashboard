export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skHTdCldhHCm2iqqVCAvUW8sTFnDxZubGk3i6RBq0HY6sxgNmFhmGrCOKvA86fmzvmynnQUGDzR16zHuk4ykZl5faRPkPwuNFk18P0ECE3P0jU2GdNrRWTj6tvN8VDqNJ22sjUuPiL4H4u46ow2ZRvtJ1MZxYswwHqnna3DNk7kYzoDmxqiR",
  'Missing environment variable: NEXT__API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
