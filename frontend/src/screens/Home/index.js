import { useEffect, useState } from "react";
import { TouchableOpacity, Modal, View, Text, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";
import HistoricList from "../../components/HistoricList";

import Icon from "react-native-vector-icons/Feather";
import dateFormat from "../../utils/dateFormated";

import api from "../../services/api";
import * as S from "./styles";
import CalendarModal from "../../components/CalendarModal";

export default function Home() {

  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovements(){
      const receives = await api.get("/receives", {
        params: {
          date: dateFormat(dateMovements, "dd/MM/yyyy")
        }
      });
      
      const balance = await api.get("/balance", {
        params: {
          date: dateFormat(dateMovements, "dd/MM/yyyy")
        }
      });

      if(isActive){
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => isActive = false;

  }, [isFocused, dateMovements])

  async function handleDelete(id){
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id
        }
      })

      setDateMovements(new Date());

    } catch (error) {
      console.log(error);
    }
  }

  function filterDateMovements(dateSelected){
    setDateMovements(dateSelected);
  }

  return (
    <S.Container>
      <Header title="Minhas movimentações" />

      <S.CurrentBalance>
        <S.ListBalance 
          data={listBalance}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.tag}
          renderItem={({ item }) => ( <BalanceItem data={item} /> )}
        />
      </S.CurrentBalance>

      <S.MovementsArea style={{elevation: 4}}>
        <S.DataHeader>
          <View style={{ flexDirection: "row" , alignItems: "center"}}> 
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="calendar" size={25} color="#3E4685" />
            </TouchableOpacity>
            <Text style={{ color: "#3E4685", fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>Últimas movimentações</Text>
          </View>

          <Text style={{ color: "#3E4685", fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>{dateFormat(dateMovements, "dd/MM/yyyy")}</Text>
        </S.DataHeader>

        <S.Movements>
          {movements.length > 0 ? (
            <FlatList
              data={movements}
              keyExtractor={item => item.id}
              renderItem={ ({ item }) => (<HistoricList data={item} deleteItem={handleDelete} />)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20}}
            />
            ) : ( 
              <S.Message>Nenhuma transação!</S.Message> 
            )
          }
        </S.Movements>
      </S.MovementsArea>

      <Modal 
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <CalendarModal 
          setVisible={() => setModalVisible(false)} 
          handleFilter={filterDateMovements}
        />
      </Modal>
    </S.Container>
  );
}
