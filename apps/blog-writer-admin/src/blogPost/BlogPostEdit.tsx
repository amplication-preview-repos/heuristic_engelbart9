import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BlogPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="contentText" multiline source="contentText" />
        <TextInput label="title" source="title" />
        <TextInput label="titleText" source="titleText" />
      </SimpleForm>
    </Edit>
  );
};
