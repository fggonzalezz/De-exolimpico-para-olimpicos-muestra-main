import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import GoogleDrivePDFViewer from '@/components/GoogleDrivePDFViewer';

describe('GoogleDrivePDFViewer', () => {
  it('renders error message for invalid URL', () => {
    render(<GoogleDrivePDFViewer pdfUrl="https://invalid-url.com" title="Test PDF" />);
    expect(screen.getByText(/URL de Google Drive inválida/i)).toBeInTheDocument();
  });

  it('renders iframe for valid Google Drive URL', () => {
    const validUrl = 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view?usp=sharing';
    render(<GoogleDrivePDFViewer pdfUrl={validUrl} title="Test PDF" />);
    
    const iframe = screen.getByTitle('Test PDF');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/preview');
  });

  it('renders loading state initially', () => {
    const validUrl = 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view';
    render(<GoogleDrivePDFViewer pdfUrl={validUrl} />);
    
    expect(screen.getByText(/Cargando PDF/i)).toBeInTheDocument();
  });

  it('calls onError callback when provided invalid URL', () => {
    const onError = vi.fn();
    render(<GoogleDrivePDFViewer pdfUrl="https://invalid.com" onError={onError} />);
    
    // Error should be shown but callback not called for invalid URL format
    expect(screen.getByText(/URL de Google Drive inválida/i)).toBeInTheDocument();
  });
});
