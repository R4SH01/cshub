import { Button } from '@/components/ui/button';
import { grenadeTypes } from '@/data/mockData';

interface FilterBarProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const FilterBar = ({ selectedType, onTypeChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-card rounded-lg border border-border animate-slide-up">
      {grenadeTypes.map((type) => (
        <Button
          key={type.value}
          onClick={() => onTypeChange(type.value)}
          variant={selectedType === type.value ? 'default' : 'secondary'}
          className="flex items-center gap-2"
        >
          <span>{type.icon}</span>
          <span>{type.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;
