import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "./Form.css";
import {
  CATEGORIES,
  CategoriesType,
  NoticeType,
} from "../Table/Table.types.ts";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../Store.tsx";

type FormData = Omit<NoticeType, "lastUpdate" | "link">;

const FormComponent = () => {
  const { id } = useParams();
  const { getItem } = useStore();
  const noticeItem = getItem(id);
  console.log({ noticeItem });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: noticeItem?.title,
      content: noticeItem?.content,
      categories: noticeItem?.categories,
      publicationDate: noticeItem?.publicationDate,
    },
    reValidateMode: "onChange",
  });
  const [categories, setCategories] = useState<CategoriesType[]>(
    noticeItem?.categories || [],
  );

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const {
      target: { value },
    } = event;
    setCategories(
      (typeof value === "string"
        ? value.split(",")
        : value) as CategoriesType[],
    );
  };

  const onSubmit = (data: FormData) => {
    const lastUpdate = new Date();
    const publicationDate = new Date(data.publicationDate);
    console.log({ ...data, lastUpdate, publicationDate });
  };

  return (
    <div className="form-wrapper">
      <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Title"
          error={Boolean(errors.title)}
          helperText={errors.title && "This field is required"}
          {...register("title", { required: true })}
        />

        <TextField
          label="Content"
          multiline
          rows={6}
          {...register("content", { required: false })}
        />

        <div>
          <h4 className="no-margin-bottom">Category</h4>
          <span className="text-color">
            Select category so readers know what your announcement is about.
          </span>
        </div>
        <FormControl error={Boolean(errors.categories)}>
          <InputLabel id="categories-input">Categories</InputLabel>
          <Select
            multiple
            labelId="categories-input"
            value={categories}
            label="Categories"
            {...register("categories", {
              required: true,
              onChange: handleChange,
            })}
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          {errors.categories && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </FormControl>

        <h4>Publication date</h4>

        <TextField
          label="Publication date"
          error={Boolean(errors.publicationDate)}
          helperText={
            errors.publicationDate &&
            (errors.publicationDate.message || "This field is required")
          }
          {...register("publicationDate", {
            required: true,
            pattern: {
              value: /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}/,
              message: "Invalid date format. Use MM/DD/YYYY HH:mm",
            },
            validate: (value) =>
              !isNaN(Date.parse(value as unknown as string)) || "Invalid date",
          })}
        />
        <button className="button" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
