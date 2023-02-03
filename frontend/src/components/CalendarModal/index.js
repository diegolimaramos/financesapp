import { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import * as S from "./styles";
import { ptBR } from "./localeCalendar";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function CalendarModal({ setVisible, handleFilter }){
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      marked: true,
      selectedColor: "#3E4685",
      textColor: "#F2F8FD"
    };

    setMarkedDates(markedDay);
  }

  function handleFilterDate(){
    handleFilter(dateNow);
    setVisible();
  }

  return(
    <S.Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      
      <S.ModalContent>
        <Calendar 
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            calendarBackground: "#F2F8FD",
            monthTextColor: "#3E4685",
            arrowColor: "#3E4685",
            textMonthFontSize: 18,
            textSectionTitleColor: "#4B4B4B",
            todayTextColor: "#F2F8FD",
            todayBackgroundColor: "#3E4685",
          }}
          hideExtraDays={true}
        />
        
        <S.ButtonFilter onPress={handleFilterDate}>
          <S.ButtonFilterText>Filtrar</S.ButtonFilterText>
        </S.ButtonFilter>
      </S.ModalContent>
    </S.Container>
  );
}