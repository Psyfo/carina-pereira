import mongoose, { Document, Model, Schema } from 'mongoose';

import { CoursePageProps } from '@/types/CoursePageProps';

interface CourseDocument extends CoursePageProps, Document {}

const HeroSectionSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: String,
    imageUrl: String,
    imageUrlMobile: String,
  },
  { _id: false }
);

const AboutSectionSchema = new Schema(
  {
    heading: { type: String, required: true },
    subheading: String,
    description: [String],
    targets: [String],
    cost: { type: String, required: true },
    details: [{ type: String, required: true }],
    perks: [{ type: String, required: true }],
  },
  { _id: false }
);

const LearningBlockSchema = new Schema(
  {
    heading: { type: String, required: true },
    items: [{ type: String, required: true }],
    bgColour: { type: String, required: true },
  },
  { _id: false }
);

const LearningSectionSchema = new Schema(
  {
    block: { type: [LearningBlockSchema], required: true },
  },
  { _id: false }
);

const CTASectionSchema = new Schema(
  {
    heading: String,
    text: String,
    buttonLabel: String,
    link: String,
  },
  { _id: false }
);

const CourseSchema = new Schema<CourseDocument>(
  {
    slug: { type: String, required: true, unique: true },
    hero: { type: HeroSectionSchema, required: true },
    about: { type: AboutSectionSchema, required: true },
    cta: { type: CTASectionSchema, required: true },
    learning: { type: LearningSectionSchema, required: true },
  },
  { timestamps: true }
);

export const Course: Model<CourseDocument> =
  mongoose.models.Course ||
  mongoose.model<CourseDocument>('Course', CourseSchema);
