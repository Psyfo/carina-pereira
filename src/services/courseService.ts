import { connectDB } from '@/lib/db/mongodb';
import { Course } from '@/models/Course';
import { CoursePageProps } from '@/types/CoursePageProps';

// Create a new course
export async function createCourse(courseData: CoursePageProps) {
  await connectDB();
  const course = new Course(courseData);
  return course.save();
}

// Get all courses
export async function getAllCourses() {
  await connectDB();
  return Course.find({});
}

// Get a course by slug
export async function getCourseBySlug(slug: string) {
  await connectDB();
  return Course.findOne({ slug });
}

// Get a course by ID
export async function getCourseById(id: string) {
  await connectDB();
  return Course.findById(id);
}

// Update a course by slug
export async function updateCourseBySlug(
  slug: string,
  data: Partial<CoursePageProps>
) {
  await connectDB();
  return Course.findOneAndUpdate({ slug }, data, { new: true });
}

// Update a course by ID
export async function updateCourseById(
  id: string,
  data: Partial<CoursePageProps>
) {
  await connectDB();
  return Course.findByIdAndUpdate(id, data, { new: true });
}

// Delete a course by slug
export async function deleteCourseBySlug(slug: string) {
  await connectDB();
  return Course.findOneAndDelete({ slug });
}

// Delete a course by ID
export async function deleteCourseById(id: string) {
  await connectDB();
  return Course.findByIdAndDelete(id);
}
