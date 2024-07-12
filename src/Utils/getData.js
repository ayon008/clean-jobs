export default async function getData() {
    const res = await fetch('../../public/assets/Reviews.json')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}