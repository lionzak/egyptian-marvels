// components/SidePanel.tsx
import { Site } from "@/data/sites";
import { X } from "lucide-react";

// Side panel component
export const SidePanel = ({ site, onClose }: { site: Site; onClose: () => void }) => (
  // Change 'fixed inset-0' to 'fixed right-0 top-0 bottom-0' and adjust z-index
  // We'll also add a background overlay that *does not* block pointer events
  <div className="fixed right-0 top-0 bottom-0 z-40 flex items-center justify-end p-4 md:p-0 mr-8">
    {/* This is the actual side panel content */}
    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto md:max-w-sm md:h-full md:rounded-l-lg md:rounded-r-none">
      {/* Header */}
      <div className="relative">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-48 object-cover rounded-t-lg md:rounded-tr-none"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-2xl font-bold text-white mb-1">{site.name}</h2>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            {site.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          {site.description}
        </p>

        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Quick Facts</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Category:</span>
              <span className="font-medium">{site.category}</span>
            </div>
            <div className="flex justify-between">
              <span>Location:</span>
              <span className="font-medium">Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);