const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

export interface ScheduleItem {
  title: string;
  content: string;
  threshold: number;
  facultyIds: string[];
  scheduleTime: string;
}

export const createSchedule = async (
  departmentId: string,
  scheduleData: ScheduleItem[]
): Promise<void> => {
  const endpoint = `${BASE_URL}/schedule/${departmentId}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(scheduleData),
    });

    if (response.ok) {
      const responseData = await response.json();

      return responseData;
    } else {
      const errorData = await response.json();
      console.error('Failed to create schedule:', errorData);
      throw new Error('Failed to create schedule');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
