import { Video } from "@/types";

export async function getVideos(): Promise<Video[]> {
  // This is a mock function. In a real application, you would fetch data from an API or database
  return [
    {
      id: "1",
      title: "Expo 2023 Highlights",
      year: 2023,
      coverImage: "/images/about1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=8g0v2SDe6MU"
    },
    {
      id: "2",
      title: "Expo 2023 Highlights",
      year: 2023,
      coverImage: "/images/about1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=8g0v2SDe6MU"
    },
    {
      id: "3",
      title: "Expo 2023 Highlights",
      year: 2023,
      coverImage: "/images/about1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=8g0v2SDe6MU"
    },
    {
      id: "4",
      title: "Expo 2023 Highlights",
      year: 2023,
      coverImage: "/images/about1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=8g0v2SDe6MU"
    },
    {
      id: "5",
      title: "Expo 2023 Highlights",
      year: 2023,
      coverImage: "/images/about1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=8g0v2SDe6MU"
    },
  ];
}

export async function signUpForProgram(data: {
  name: string;
  email: string;
  programType: string;
}) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  return response.json();
}
