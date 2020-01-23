import React from "react";

const RowInfo = ({ row }) => (
  <section>
    Выбран пользователь <b>{`${row.firstName} ${row.lastName}`}</b> <br />
    Описание:
    <br />
    <textarea defaultValue={row.description} />
    <br />
    Адрес проживания: <b>{row.address.streetAddress}</b>
    <br />
    Город: <b>{row.address.city}</b>
    <br />
    Провинция/штат: <b>{row.address.state}</b>
    <br />
    Индекс: <b>{row.address.zip}</b>
    <br />
  </section>
);

export default RowInfo;
