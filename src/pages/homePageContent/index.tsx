import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import FilterModal from "../../components/common/FilterModal";
export default function HomePageContent(){

    const [checked, setChecked] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const toggleCheck = (taskId) => {
        setSelectedTask(prev => prev === taskId ? null : taskId);
      };

    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

    const openFilterModal = () => {
        setIsFilterModalVisible(true);
    };

    const closeFilterModal = () => {
        setIsFilterModalVisible(false);
    };

    const handleApplyFilters = (filters: any) => {
        // Here you will implement the logic to filter your tasks based on the 'filters'
        console.log("Applied filters:", filters);
        closeFilterModal();
    };

    return(
        <View style={styles.container}>

            <View style={styles.cont}>
                <View style={styles.header}>
                    <Text style={styles.txtTitle}>Taskly</Text>
                    <Image source={require('../../assets/imgs/avatar.png')} style={{ width: 50, height: 50 }} ></Image>
                </View>

                <View style={styles.content}>
                    <TouchableOpacity onPress={openFilterModal}>
                        <View style={styles.conticon}>
                            <Image style={styles.icon} source={require('../../assets/icons/Vector.png')}></Image>
                        </View>
                    </TouchableOpacity>
                        
                   
                    <View style={styles.task}>
                        <View style={styles.tasktitle}>
                            <Text style={styles.txtTi}>Bater o ponto</Text>
                            
                            <TouchableOpacity
                                style={styles.checkContainer}
                                onPress={() => toggleCheck(1)}
                                    >
                                {selectedTask === 1 && <Text style={styles.checkMark}>✓</Text>}
                            </TouchableOpacity>
                            
                        </View>
                        <Text style={styles.txt}>bater o ponto pelo site do kairos e depois tenho que sair para tomar café.</Text>
                        <View style={styles.contSpan}>
                            <Text style={styles.span}>TRABALHO</Text>
                            <Text style={styles.span}>CASA</Text>
                            <Text style={styles.span}>ESPORTE</Text>
                            <Text style={styles.span}>ACADEMIA</Text>
                            <Text style={styles.span}>LAZER</Text>
                        </View>
                        <TouchableOpacity style={styles.btn}><Text style={styles.txtbtn}>VER DETALHES</Text></TouchableOpacity>
                    </View>

                    <View style={styles.task}>
                        <View style={styles.tasktitle}>
                                <Text style={styles.txtTi}>Jogar vôlei</Text>
                                <TouchableOpacity
                                    style={styles.checkContainer}
                                    onPress={() => toggleCheck(2)}
                                    >
                                    {selectedTask === 2 && <Text style={styles.checkMark}>✓</Text>}
                                </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}>Marcar pelada com o pessoal do CT.</Text>
                        <View style={styles.contSpan}>
                            <Text style={styles.span}>TRABALHO</Text>
                            <Text style={styles.span}>CASA</Text>
                            <Text style={styles.span}>ESPORTE</Text>
                            <Text style={styles.span}>ACADEMIA</Text>
                            <Text style={styles.span}>LAZER</Text>
                        </View>
                        <TouchableOpacity style={styles.btn}><Text style={styles.txtbtn}>VER DETALHES</Text></TouchableOpacity>
                  
                    </View>
                </View>
                <View>

                </View>
                <TouchableOpacity style={styles.criar}>
                    <Text style={styles.txtcriar}>Criar Tarefa</Text>
                </TouchableOpacity>

                <FilterModal
                    visible={isFilterModalVisible}
                    onClose={closeFilterModal}
                    onFilter={handleApplyFilters}
                />
            </View>
        </View>
    )
}