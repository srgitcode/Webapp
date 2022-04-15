let id = 0;
const createData = (name, calories, fat, carbs, protein) => {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
};

export default [
  createData(
    "Vessel yoghurt sdafdfdssfdfsdsdsfdsfdsfsfdfsd sd fsdfsdfsdsfdsfd",
    159,
    6.0,
    24,
    4.0
  ),
  createData(
    "Vessel sandwichdsfsdfsdf dfssdfsdafsad asffsd asfds df",
    237,
    9.0,
    37,
    4.3
  ),
  createData(
    "Vessel fdsdfsadfasfd fs dafsd fsdsfdafdsfds fsd sf dsfd asfd sfdasdfsfd",
    262,
    16.0,
    24,
    6.0
  ),
  createData(
    "Vessel fasdffsdasfdfsdsfdfsdfsdfdfsdfsdfsdfsdfsdsfd",
    305,
    3.7,
    67,
    4.3
  ),
  createData(
    "Vessel af ffdsfds sfdfsa adfs afsdfsadfsdafdsfsadasfdfad s",
    356,
    16.0,
    49,
    3.9
  )
];
