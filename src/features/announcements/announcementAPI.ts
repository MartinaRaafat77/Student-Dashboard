export async function fetchAnnouncements() {
    const res = await fetch('http://localhost:5000/api/announcements');
    if (!res.ok) throw new Error('Failed to fetch announcements');
    return res.json();
}