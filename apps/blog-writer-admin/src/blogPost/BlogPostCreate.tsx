import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="contentText" multiline source="contentText" />
        <TextInput label="title" source="title" />
        <TextInput label="titleText" source="titleText" />
      </SimpleForm>
    </Create>
  );
};
