export const createQuiz = async (quiz) => {
  const result = await fetch(`${process.env.API_URL}/api/createQuiz`, {
    method: 'POST',
    body: JSON.stringify(quiz),
  })
  return await result.json()
}
