import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Importe o useTheme

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (filters: any) => void;
}

interface Filters {
  sortByPriority?: 'high' | 'low';
  tags?: string[];
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, onFilter }) => {
  const { theme } = useTheme();
  const [expandSortOptions, setExpandSortOptions] = useState<boolean>(false);
  const [expandTagsOptions, setExpandTagsOptions] = useState<boolean>(false);
  const [expandDateOptions, setExpandDateOptions] = useState<boolean>(false);
  const [prioritySortOrder, setPrioritySortOrder] = useState<'high' | 'low' | ''>('');
  const [availableTags, setAvailableTags] = useState([
    { id: 'trabalho', label: 'TRABALHO' },
    { id: 'casa', label: 'CASA' },
    { id: 'academia', label: 'ACADEMIA' },
  ]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateFilterText, setDateFilterText] = useState<string>('');

  const handleApplyFilters = () => {
    const filters: Filters = {};
    if (prioritySortOrder) {
      filters.sortByPriority = prioritySortOrder;
    }
    if (selectedTags.length > 0) {
      filters.tags = selectedTags;
    }
    onFilter(filters);
    onClose();
  };

  const handleClearFilters = () => {
    setExpandSortOptions(false);
    setExpandTagsOptions(false);
    setPrioritySortOrder('');
    setSelectedTags([]);
    onFilter({});
    onClose();
  };

  const togglePriority = (priority: 'high' | 'low') => {
    setPrioritySortOrder(prioritySortOrder === priority ? '' : priority);
  };

  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  // Lógica para dividir as tags em colunas
  const column1 = availableTags.slice(0, Math.min(2, availableTags.length));
  const remainingTags = availableTags.slice(2);
  const column2 = remainingTags;

  const filterModalStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(17, 24, 39, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      backgroundColor: theme.secondaryBg,
      borderRadius: 8,
      paddingHorizontal: 25,
      paddingVertical: 20,
      width: '85%',
      maxWidth: 400,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Roboto-Bold',
      color: theme.mainText,
    },
    closeIcon: {
      width: 25,
      height: 25,
      marginTop: 5,
      marginRight: 3,
    },
    filterItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 18,
      borderBottomWidth: 1,
      borderColor: theme.secondaryText,
    },
    filterLabel: {
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      color: theme.mainText,
    },
    arrowIcon: {
      width: 18,
      height: 18,
      marginTop: 0,
      marginRight: 5,
    },
    filterOptions: {
      paddingLeft: 15,
      marginTop: 0,
      marginBottom: 20,
      backgroundColor: theme.primaryLight,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderWidth: 1.5,
      borderColor: theme.secondaryAccent,
      borderRadius: 4,
      marginRight: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: theme.secondaryAccent,
    },
    checkmark: {
      color: '#fff',
      fontSize: 12,
    },
    checkmarkTags: {
      color: theme.secondaryAccent,
      fontSize: 12,
    },
    checkboxLabel: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: theme.mainText,
    },
    buttonRow: {
      flexDirection: 'column',
      marginTop: 50,
    },
    buttonPrimary: {
      backgroundColor: theme.primary,
      paddingVertical: 8,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    dateField: {
      borderWidth: 2,
      borderRadius: 8,
      borderColor: theme.primary,
      backgroundColor: theme.secondaryBg,
    },
    dateInput: {
      marginLeft: 10,
      color: theme.mainText,
    },
    primaryText: {
      color: '#fff',
      fontFamily: 'Roboto-Medium',
      fontSize: 18,
    },
    priorityOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingLeft: 0,
      borderRadius: 0,
      marginBottom: 0,
    },
    roundCheckbox: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.secondaryAccent,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    roundCheckboxChecked: {
      backgroundColor: theme.secondaryAccent,
      borderColor: theme.secondaryAccent,
    },
    roundCheckboxUnchecked: {},
    tagSquircleCheckbox: {
      width: 20,
      height: 20,
      borderRadius: 0,
      borderWidth: 1.5,
      borderColor: theme.secondaryAccent,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tagSquircleCheckboxChecked: {
      backgroundColor: theme.primaryLight,
      borderColor: theme.secondaryAccent,
    },
    tagsColumnsContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tagColumn: {
      flex: 1,
    },
  });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={filterModalStyles.overlay}>
        <View style={filterModalStyles.modal}>
          <View style={filterModalStyles.header}>
            <Text style={filterModalStyles.title}>Filtro</Text>
            <TouchableOpacity onPress={onClose}>
              <Image source={require('../../assets/icons/Close.png')} style={filterModalStyles.closeIcon} resizeMode="center" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={filterModalStyles.filterItem} onPress={() => setExpandSortOptions(!expandSortOptions)}>
            <Text style={filterModalStyles.filterLabel}>Ordenar por</Text>
            <Image source={expandSortOptions ? require('../../assets/icons/ChevronUp.png') : require('../../assets/icons/ChevronDown.png')} style={filterModalStyles.arrowIcon} resizeMode="contain" />
          </TouchableOpacity>
          {expandSortOptions && (
            <View style={filterModalStyles.filterOptions}>
              <TouchableOpacity
                onPress={() => togglePriority('high')}
                style={[filterModalStyles.priorityOption]}
              >
                <View style={[filterModalStyles.roundCheckbox, prioritySortOrder === 'high' ? filterModalStyles.roundCheckboxChecked : filterModalStyles.roundCheckboxUnchecked]}>
                  {prioritySortOrder === 'high' && <Text style={filterModalStyles.checkmark}>✓</Text>}
                </View>
                <Text style={filterModalStyles.checkboxLabel}>Prioridade (de baixa para alta)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => togglePriority('low')}
                style={[filterModalStyles.priorityOption]}
              >
                <View style={[filterModalStyles.roundCheckbox, prioritySortOrder === 'low' ? filterModalStyles.roundCheckboxChecked : filterModalStyles.roundCheckboxUnchecked]}>
                  {prioritySortOrder === 'low' && <Text style={filterModalStyles.checkmark}>✓</Text>}
                </View>
                <Text style={filterModalStyles.checkboxLabel}>Prioridade (de alta para baixa)</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={filterModalStyles.filterItem} onPress={() => setExpandTagsOptions(!expandTagsOptions)}>
            <Text style={filterModalStyles.filterLabel}>Tags</Text>
            <Image source={expandTagsOptions ? require('../../assets/icons/ChevronUp.png') : require('../../assets/icons/ChevronDown.png')} style={filterModalStyles.arrowIcon} resizeMode="contain" />
          </TouchableOpacity>
          {expandTagsOptions && (
            <View style={filterModalStyles.filterOptions}>
              <View style={filterModalStyles.tagsColumnsContainer}>
                <View style={filterModalStyles.tagColumn}>
                  {column1.map((tag) => (
                    <View style={filterModalStyles.checkboxContainer} key={tag.id}>
                      <TouchableOpacity
                        style={[
                          filterModalStyles.tagSquircleCheckbox,
                          selectedTags.includes(tag.id) && filterModalStyles.tagSquircleCheckboxChecked,
                        ]}
                        onPress={() => toggleTag(tag.id)}
                      >
                        {selectedTags.includes(tag.id) && <Text style={filterModalStyles.checkmarkTags}>✓</Text>}
                      </TouchableOpacity>
                      <Text style={filterModalStyles.checkboxLabel}>{tag.label}</Text>
                    </View>
                  ))}
                </View>
                <View style={filterModalStyles.tagColumn}>
                  {column2.map((tag) => (
                    <View style={filterModalStyles.checkboxContainer} key={tag.id}>
                      <TouchableOpacity
                        style={[
                          filterModalStyles.tagSquircleCheckbox,
                          selectedTags.includes(tag.id) && filterModalStyles.tagSquircleCheckboxChecked,
                        ]}
                        onPress={() => toggleTag(tag.id)}
                      >
                        {selectedTags.includes(tag.id) && <Text style={filterModalStyles.checkmarkTags}>✓</Text>}
                      </TouchableOpacity>
                      <Text style={filterModalStyles.checkboxLabel}>{tag.label}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}

          <TouchableOpacity style={filterModalStyles.filterItem} onPress={() => setExpandDateOptions(!expandDateOptions)}>
            <Text style={filterModalStyles.filterLabel}>Data</Text>
            <Image
              source={expandDateOptions ? require('../../assets/icons/ChevronUp.png') : require('../../assets/icons/ChevronDown.png')}
              style={filterModalStyles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {expandDateOptions && (
            <View style={filterModalStyles.dateField}>
              <TextInput
                value={dateFilterText}
                onChangeText={setDateFilterText}
                style={filterModalStyles.dateInput}
                placeholder="example@example.com"
                placeholderTextColor={theme.secondaryText}
              />
            </View>
          )}

          <View style={filterModalStyles.buttonRow}>
            <TouchableOpacity style={filterModalStyles.buttonPrimary} onPress={handleApplyFilters}>
              <Text style={filterModalStyles.primaryText}>APLICAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={filterModalStyles.buttonPrimary} onPress={handleClearFilters}>
              <Text style={filterModalStyles.primaryText}>LIMPAR FILTROS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;